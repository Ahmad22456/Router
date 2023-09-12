import MovieCard from "../cards/MovieCard"

function FilterList({list, select}) {

    return (
        <div className="listFilter">
            {list.map((x) => (
                <MovieCard id={x.id} title={x.title} description={x.description} posterURL={x.posterURL} rating={x.rating} add={select}/>
            ))}
        </div>
    )
}

export default FilterList