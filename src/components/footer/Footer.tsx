
export const Footer = () => {
    return (
        <div className="flex justify-center bg-gray-800 w-screen p-4 md:px-12 lg:px-32 border-t-2 border-gray-700 absolute bottom-0">
            <p>
                © GeoQuix (2023) by&nbsp;
                <a
                    className="text-inherit cursor-pointer hover:text-cyan-500 underline"
                    href="https://github.com/JohnXander">
                    John Bloxam
                </a>
            </p>
        </div>
    )
}