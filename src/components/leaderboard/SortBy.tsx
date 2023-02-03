import { Dispatch, SetStateAction } from "react"
import FilterBar from "./FilterBar"

interface Props {
    categoryFilters: any
    category: string
    setCategory: Dispatch<SetStateAction<string>>
    statFilters: any
    stats: string
    setStats: Dispatch<SetStateAction<string>>
}

const SortBy: React.FC<Props> = ({ categoryFilters, category, setCategory, statFilters, stats, setStats }) => {
    return (
        <div className="flex flex-col md:flex-row gap-x-8 items-center">
                    <h2 className="font-bold">Sort By:</h2>

                    <ul className="flex">
                        <FilterBar
                            filters={categoryFilters}
                            filter={category}
                            setFilter={setCategory}
                        />
                    </ul>

                    <ul className="flex">
                        <FilterBar
                            filters={statFilters}
                            filter={stats}
                            setFilter={setStats}
                        />
                    </ul>
                </div>
    )
}

export default SortBy

