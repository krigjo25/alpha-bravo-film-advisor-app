let model = {

    
    app: {
        pages: [],
        current: "register", //innlogga view, register, login

        session: {
            id: 10012,

        }
    },

    // Inputs
    inputs: {
        register: {
            id : null,
            user:"",
            email: "",
            password: "",
        },

        //  innloggeet bruker
        login: {
            username:"",
            passords:"",
        },

        // model.input.login.username = this.value -> push i data
        findmovie: {
            id: null,
            name:null,

        },
        addmovie: {
            name: ""
        },
        editprofilepage: {
            bio: "",
            image: ""
        },
        findactor: {
            name: ""
        },
        movieview: {
            rating: null
        }
    },
//  Bruker System
    userdata: {
        users: [
            {
                id: 10012,
                user: "Kompis",
                email: "kompis@kompisen.com",
                password: "sikkertpassord",
                bio: "Liker katter",
                image: "img/kompis.jpg",
                ratedmovies: [1002, 1010, 1012], // filmer har en id
                ratings: [{
                    film: "",
                    pr: 736
                }]
            },
        ],
        movies: [
            {
                title: "Godfather",
                actors: "Don Corleone",
                ratings: [640, 230, 900],
                avgRating: null,
                releasedate: 1980,
                poster: "img/godfather.jpg"
            },
            {
                title: "Star Wars",
                actors: "DarthCVader",
                ratings: [640, 230, 900],
                avgRating: null,
                releasedate: 1980,
                poster: "img/godfather.jpg"
            }
                
        ]
    },

    // Innlogget side
    movieheader:{
        caption: ['Klar for en vittig reise?', 'Broen til et nytt lys', 'Kjærlighet på nettet'],
        silder: [['img1', 'img2', 'img3']]

    },
    
    //  Film Informasjon
   // movies : [
   // { title: "Filmnavn ", actors:
   //     "Jon bersgrud", releasedate: 1985},
   //     { title: "Filmnavn ", actors:
   //         "Anne Lise", releasedate: 1986}

    

    //   Filterings Informasjon
    findMovie:{
        movietitle: null,
        actor: model.userdata.movies.actors,
        releasedate: model.userdata.releasedate,

   },
}