import Image from "next/image"
import Link from "next/link"
import Logo from "../../../assets/logo.png"
import Leaderboard from "../../../assets/leaderboard.png"

export const Header = () => {
    return (
        <div className="flex justify-between p-4 md:px-12 lg:px-32 border-b-2 border-gray-700">
            <div>
                <Link
                    href="/"
                    className="flex items-center gap-2 w-fit cursor-pointer">
                    <Image
                        src={Logo}
                        alt="GeoQuix Logo"
                        width={40}
                        height={40}
                    />
                    <h1 className="text-3xl font-bold">
                        Geo<b className="text-cyan-500">Quix</b>
                    </h1>
                </Link>
            </div>
            <Link
                href="/leaderboard"
                className="p-1 rounded hover:bg-gray-700 cursor-pointer">
                <Image
                    src={Leaderboard}
                    alt="GeoQuix Logo"
                    width={30}
                    height={30}
                />
            </Link>
        </div>
    )
}