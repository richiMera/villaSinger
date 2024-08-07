import React, { useRef, useEffect } from 'react';

const cards = Array.from({ length: 6 }, (_, index) => `Card ${index + 1}`);

const HorizontalScroll: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        const onWheel = (event: WheelEvent) => {
            if (scrollContainer) {
                event.preventDefault();
                scrollContainer.scrollLeft += event.deltaY;
            }
        };

        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', onWheel);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('wheel', onWheel);
            }
        };
    }, []);

    return (
        <div
            style={{
                overflow: 'hidden', // Wrapper con overflow hidden
                width: '100vw',
                height: '100vh',
            }}
        >
            <h1>Ciao</h1>
            <div
                ref={scrollContainerRef}
                style={{
                    display: 'flex',
                    height: '100vh',
                    alignItems: 'center',
                    overflowX: 'scroll',
                    // scrollBehavior: 'smooth'
                }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            minWidth: '770px',
                            height: '433px',
                            margin: '16px',
                            backgroundColor: '#ccc',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            flexShrink: 0,
                        }}
                    >
                        {card}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HorizontalScroll;
