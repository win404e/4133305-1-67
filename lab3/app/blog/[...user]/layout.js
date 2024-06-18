export default function BlogLayout({children}){
    return (
        <layout>
        <div>
            Menu
        </div>
        <div>{children}</div>
        </layout>
    );
}