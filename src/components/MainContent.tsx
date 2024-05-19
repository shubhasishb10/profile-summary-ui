//@ts-ignore
export default function MainContent({children}) {
    return (
        <div>
            <h1 className="w-[100%] h-[100%] text-4xl text-center justify-between p-24">Content Page</h1>
            {children}
        </div>
    )
}