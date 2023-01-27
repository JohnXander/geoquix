import Image from "next/image"
import City from "../../../assets/category-icons/city.png"
import Flag from "../../../assets/category-icons/flag.png"
import Area from "../../../assets/category-icons/area.png"
import Timezones from "../../../assets/category-icons/timezones.png"
import Population from "../../../assets/category-icons/population.png"
import Link from "next/link"

export const Categories = () => {
    const category = `w-full md:w-3/4 py-4 px-6 border-2 border-gray-200 flex items-center justify-between
    cursor-pointer hover:bg-gray-200`

    return (
        <div className="flex flex-col items-center gap-2 py-6 md:px-12 lg:px-32 border-b-2 border-gray-200">
            <Link className={category} href="/capitals">
                <h2 className="text-2xl">Capital Cities</h2>
                <Image
                    src={City}
                    alt="City Icon"
                    width={35}
                    height={35}
                    />
            </Link>
            <Link className={category} href="/flags">
                <h2 className="text-2xl">Flags</h2>
                <Image
                    src={Flag}
                    alt="Flag Icon"
                    width={35}
                    height={35}
                />
            </Link>
            <Link className={category} href="/area">
                <h2 className="text-2xl">Area</h2>
                <Image
                    src={Area}
                    alt="Area Icon"
                    width={35}
                    height={35}
                />
            </Link>
            <Link className={category} href="/timezones">
                <h2 className="text-2xl">Timezones</h2>
                <Image
                    src={Timezones}
                    alt="Timezone Icon"
                    width={35}
                    height={35}
                />
            </Link>
            <Link className={category} href="/population">
                <h2 className="text-2xl">Population</h2>
                <Image
                    src={Population}
                    alt="Population Icon"
                    width={35}
                    height={35}
                />
            </Link>
        </div>
    )
}