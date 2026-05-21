"use client"

import { useState } from "react";
import DoctorsCard from "./DoctorsCard";

const Search = ({ data }) => {
    const [search, setSearch] = useState("")
    const filteredData = data.filter((doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase()) || doctor.specialty.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="mt-20 space-y-3.5">
            <input
                type="text"
                placeholder="🔍 Search by name or specialty"
                className="input input-bordered border-2 border-green-600 p-3 flex justify-center"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredData.map((d) => (
                    <DoctorsCard key={d._id} data={d} />
                ))}
            </div>
        </div>
    );
};

export default Search;