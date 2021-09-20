const apiCappacita = {
    listaProd: 'http://localhost:3003/api/prodution/list',
    prod: 'http://localhost:3003/api/prodution',
    myList: 'http://localhost:3003/api/prodution/mylist/list',

}


const getListFetch = async (type, genre) =>{
    
    const req = await fetch(`${apiCappacita.listaProd}/${type}/${genre}`, {
        method: 'GET',
    });

    const json = await req.json();
    return json; 
};

const getProdutionFetch = async (id, type) =>{
    
    const req = await fetch(`${apiCappacita.prod}/${id}/${type}`, {
        method: 'GET',
    });

    const json = await req.json();
    return json; 
}




export default { 
    getListHome: async () => {
        return [
            {
                cover: 'moviesLove',
                title: 'Filmes de Romance',
                items: await getListFetch("movie", 10749)
            },
            {
                cover: 'moviesHorror',
                title: 'Filmes de Terror',
                items: await getListFetch("movie", 27)
            },
            {
                cover: 'tvLove',
                title: 'Series de Romance',
                items: await getListFetch("tv", 10749)
            },
            {
                cover: 'tvMystery',
                title: 'Series de Mistério',
                items: await getListFetch("tv", 9648)
            },
            {
                cover: 'moviesSciFi',
                title: 'Filmes de Sci-Fi',
                items: await getListFetch("movie", 878)
            },
        ];
    },

    getProdution: async (id, type)=>{
        return [
            {
                item: await getProdutionFetch(id, type)
            }
        ]
    }
}
