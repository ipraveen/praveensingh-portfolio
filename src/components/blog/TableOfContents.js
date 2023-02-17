import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function getIds(items) {
    return items.reduce((acc, item) => {
        if (item.url) {
            // url has a # as first character, remove it to get the raw CSS-id
            acc.push(item.url.slice(1));
        }
        if (item.items) {
            acc.push(...getIds(item.items));
        }
        return acc;
    }, []);
}

function useActiveId(itemIds) {
    const [activeId, setActiveId] = useState(`test`);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: `0% 0% -80% 0%` }
        );
        itemIds.forEach((id) => {
            observer.observe(document.getElementById(id));
        });
        return () => {
            itemIds.forEach((id) => {
                observer.unobserve(document.getElementById(id));
            });
        };
    }, [itemIds]);
    return activeId;
}

function renderItems(items) {
    const hash = typeof window !== 'undefined' && window.location.hash;
    return (
        <ol className="list-none text-sm text-slate-500">
            {items.map((item) => {
                return (
                    <li key={item.url}>
                        <a
                            href={item.url}
                            className={hash === item.url ? 'text-slate-800 font-semibold' : 'text-slate-500'}
                        >
                            {item.title}
                        </a>
                        {item.items && renderItems(item.items)}
                    </li>
                );
            })}
        </ol>
    );
}

function TableOfContents({ className, items }) {
    // const idList = getIds(props.items);
    // const activeId = useActiveId(idList);
    return (
        <div className={className}>
            <div className="sticky top-4">{renderItems(items)}</div>
        </div>
    );
}

export default TableOfContents;
