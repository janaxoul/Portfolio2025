function BottomNav() {
    return (
    <>
    <div className="bottom-bg"></div>
        <nav className="bottom-nav stepped-div font-[clash_display] font-[500]">
        <a href="/">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Tools</a>
        <a href="#">Contact</a>
        </nav>
    <div className="full-frame pointer-events-none"></div>
    <div className="bg-hider-frame pointer-events-none"></div>
    </>
    );
}

export default BottomNav;