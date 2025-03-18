import React from "react";

interface JournalCardProps {
    id: string;
    title: string;
    story: string;
    image?: string;
}

export default function JournalCard({ title, story, image }: JournalCardProps) {
    return (
        <div className="journal-card">
            {image && <img src={image} alt={title} className="journal-image" />}
            <div className="journal-content">
                <h2 className="journal-title">{title}</h2>
                <p className="journal-text">{story}</p>
            </div>
        </div>
    );
}
