let model = {

    //  Application path
    app: {
        pages: [],
        current: "register", //innlogga view, register, login

        //  Is this user online
        session: {
            id: 10012,

        }
    },
    // model.input.login.username = this.value -> push i data
    // Inputs
    inputs: {
        register: {
            id : null,
            user:"",
            email: "",
            password: "",
        },

        // luser inlogged
        login: {
            username:"",
            passords:"",
        },

        //  Search movie
        findmovie: {
            id: null,
            name:null,

        },

        //  Manually add a movie
        addmovie: {
            name: ""
        },

        //  Profile
        editprofilepage: {
            bio: "",
            image: ""
        },
        // Fetching the actor
        findactor: {
            name: ""
        },
        movieview: {
            rating: null
        },

        //   Filtrating Information
        findMovie:{
            movietitle: null,
            actor: model.userdata.movies.actors,
            releasedate: model.userdata.releasedate,

   },
    },

    //  user data
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
                actors: ["Don Corleone", "Michael Corleone", "Sonny Corleone"],
                ratings: [640, 230, 900],
                avgRating: null,
                releasedate: 1980,
                poster: "img/godfather.jpg"
            },
            {
                title: "Star Wars",
                actors: ["DarthCVader", "Luke Skywalker", "Princess Leia"],
                ratings: [640, 230, 900],
                avgRating: null,
                releasedate: 1980,
                poster: "img/godfather.jpg"
            }
                
        ]
    },

    // forntpage 
    movieheader:{
        caption: ['Klar for en vittig reise?', 'Broen til et nytt lys', 'Kjærlighet på nettet'],
        silder: [['img1', 'img2', 'img3']]

    }
}