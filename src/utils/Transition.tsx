// src/components/Transition.tsx
import React, { useRef, useEffect, useContext, ReactNode, ElementType } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';

interface TransitionContextProps {
    parent: {
        show?: boolean;
        isInitialRender?: boolean;
        appear?: boolean;
    };
}

const TransitionContext = React.createContext<TransitionContextProps>({
    parent: {},
});

function useIsInitialRender() {
    const isInitialRender = useRef(true);
    useEffect(() => {
        isInitialRender.current = false;
    }, []);
    return isInitialRender.current;
}

interface CSSTransitionProps<T extends HTMLElement> {
    show?: boolean;
    enter?: string;
    enterStart?: string;
    enterEnd?: string;
    leave?: string;
    leaveStart?: string;
    leaveEnd?: string;
    appear?: boolean;
    unmountOnExit?: boolean;
    tag?: ElementType; // Allows using any HTML/SVG element or a React component
    children: ReactNode;
    rest?: React.HTMLAttributes<T>;
}

function CSSTransition<T extends HTMLElement>({
    show,
    enter = '',
    enterStart = '',
    enterEnd = '',
    leave = '',
    leaveStart = '',
    leaveEnd = '',
    appear,
    unmountOnExit,
    tag: Tag = 'div', // Use capitalized Tag since it's a component reference
    children,
    ...rest
}: CSSTransitionProps<T>) {
    const enterClasses = enter.split(' ').filter((s) => s.length);
    const enterStartClasses = enterStart.split(' ').filter((s) => s.length);
    const enterEndClasses = enterEnd.split(' ').filter((s) => s.length);
    const leaveClasses = leave.split(' ').filter((s) => s.length);
    const leaveStartClasses = leaveStart.split(' ').filter((s) => s.length);
    const leaveEndClasses = leaveEnd.split(' ').filter((s) => s.length);
    const removeFromDom = unmountOnExit;

    function addClasses(node: HTMLElement, classes: string[]) {
        if (classes.length) node.classList.add(...classes);
    }

    function removeClasses(node: HTMLElement, classes: string[]) {
        if (classes.length) node.classList.remove(...classes);
    }

    const nodeRef = useRef<T>(null!); // Use the generic type T for the ref

    return (
        <ReactCSSTransition
            appear={appear}
            nodeRef={nodeRef}
            unmountOnExit={removeFromDom}
            in={show}
            addEndListener={(done) => {
                nodeRef.current?.addEventListener('transitionend', done, false);
            }}
            onEnter={() => {
                if (!removeFromDom && nodeRef.current) nodeRef.current.style.display = '';
                if (nodeRef.current) addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
            }}
            onEntering={() => {
                if (nodeRef.current) {
                    removeClasses(nodeRef.current, enterStartClasses);
                    addClasses(nodeRef.current, enterEndClasses);
                }
            }}
            onEntered={() => {
                if (nodeRef.current) removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
            }}
            onExit={() => {
                if (nodeRef.current) addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
            }}
            onExiting={() => {
                if (nodeRef.current) {
                    removeClasses(nodeRef.current, leaveStartClasses);
                    addClasses(nodeRef.current, leaveEndClasses);
                }
            }}
            onExited={() => {
                if (nodeRef.current) {
                    removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
                    if (!removeFromDom) nodeRef.current.style.display = 'none';
                }
            }}
        >
            <Tag ref={nodeRef} {...rest} style={{ display: !removeFromDom ? 'none' : undefined }}>
                {children}
            </Tag>
        </ReactCSSTransition>
    );
}

interface TransitionProps<T extends HTMLElement> extends CSSTransitionProps<T> {
    show?: boolean;
    appear?: boolean;
}

function Transition<T extends HTMLElement>({ show, appear, ...rest }: TransitionProps<T>) {
    const { parent } = useContext(TransitionContext);
    const isInitialRender = useIsInitialRender();
    const isChild = show === undefined;

    if (isChild) {
        return (
            <CSSTransition
                appear={parent.appear || !parent.isInitialRender}
                show={parent.show}
                {...rest}
            />
        );
    }

    return (
        <TransitionContext.Provider
            value={{
                parent: {
                    show,
                    isInitialRender,
                    appear,
                },
            }}
        >
            <CSSTransition appear={appear} show={show} {...rest} />
        </TransitionContext.Provider>
    );
}

export default Transition;
