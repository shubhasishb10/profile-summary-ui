type PageSectionprops = {
    title: string
    propClassName: string,
    children: any
}

export default function PageSection({propClassName, title, children}: PageSectionprops) {

    const className = "inline-flex bg-cover justify-content flex-col bg-[url('page-section-bg.jpeg')] shadow-2xl rounded-lg p-10 m-10 text-left " + propClassName

    return (
        <div className={className}>
            <h1 className="text-4xl shadow-2xl  font-bold block text-center bg-cover
                                 text-sky-800 bg-[url('page-section-title-header-bg.jpeg')] p-4 m-5 mb-10 rounded-xl">{title}</h1>
            {children}
        </div>
    )
}   