
export function useLayout(pathname:string) {
    
    const routes = [
        {
            path: "/",
            name: "About",
        },
        {
            path: "/resume",
            name: "Resume",
        },
        {
            path: "/portfolio",
            name: "Portfolio",
        },
        {
            path: "/blog",
            name: "Blog",
        },
        {
            path: "/contact",
            name: "Contact",
        },
    ]
    
    const title = 
        pathname === "/" 
        ? "about" 
        : pathname === "/resume" 
        ? "resume"
        : pathname === "/contact" 
        ? "contact"
        : pathname === "/portfolio" 
        ? "portfolio"
        : "blog";
    return {
        title, routes
    }
}