import Image from "next/image"
import Link from "next/link"
import allCategories from "../../data/data"

export const Categories = () => {

    const category = `w-full md:w-3/4 py-4 px-6 border-2 border-gray-700 flex items-center justify-between
    cursor-pointer hover:bg-gray-700`

    return (
        <div className="flex flex-col items-center gap-3 py-6 md:px-12 lg:px-32">
            {allCategories.map((c: any, idx: number) => {
                return (
                    <Link key={idx} className={category} href={`/${c.name}`}>
                        <h2 className="text-2xl capitalize">{c.name}</h2>
                        <Image
                            src={c.icon}
                            alt={`${c.name} icon`}
                            width={35}
                            height={35}
                        />
                    </Link>
                )
            })}
        </div>
    )
}