export default function Nav({ links }) {
    return (
        <nav>
            <div>
                <ul>
                    {links.map((link) => link)}
                </ul>
            </div>
        </nav>
    );
}