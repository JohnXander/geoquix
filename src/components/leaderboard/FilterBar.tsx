import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

interface Props {
    filters: any
    filter: string
    setFilter: Dispatch<SetStateAction<string>>
}

const FilterBar: React.FC<Props> = ({ filters, filter, setFilter }) => {
    return (
        filters.map((cat: any, idx: number) => {
            const categoryName = cat.src.substring(20).split(".")[0]
            const filterItem = "flex items-center border-y-2 border-l-2 border-gray-700 p-2 cursor-pointer hover:bg-gray-700"

            return (
                <li
                    key={idx}
                    onClick={() => setFilter(categoryName)}
                    className={filterItem}
                    style={
                        filter === categoryName ? { backgroundColor: "#374151" } :
                            idx === filters.length - 1 ? { borderRight: "2px solid #334155" } :
                                { backgroundColor: "inherit" }
                    }>
                    <Image
                        src={cat}
                        alt={`${categoryName} icon`}
                        width={30}
                        height={30}
                    />
                </li>
            )
        })
    )
}

export default FilterBar