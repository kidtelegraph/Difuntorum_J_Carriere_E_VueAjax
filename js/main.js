const albumStore = Vue.createApp({
    created() {
        fetch('http://localhost/albumstore_api/public/models')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.albumsData = data; // Assign fetched data to albumsData
            })
            .catch(error => {
                console.log(error);
                // Let the user know in-app that something has gone wrong
            })
    },
    data() {
        return {
            albumsData: [],
            artistName: "",     // Initialize artistName property
            numberOfTracks: 0,  // Initialize numberOfTracks property
            releaseYear: "",    // Initialize releaseYear property
            genre: "",          // Initialize genre property
            error: ""           // Initialize error property
        }
    },
    methods: {
        getAlbum(whichAlbum) {
            console.log(whichAlbum);
            let title = whichAlbum;
            let convertedTitle = title.split(' ').join('+');
            console.log(convertedTitle);

            fetch(`https://localhost/albumstore_api/public/${thisAlbum}`) // Use correct URL for album API
                .then(res => res.json())
                .then(data => {
                    console.log(data.docs[0]);
                    // Shortcut to the data we want
                    const album = data.docs[0];
                    if (data.docs.length > 0) {
                        this.artistName = album.artist_name ? album.artist_name[0] : 'Not available';
                        this.numberOfTracks = album.number_of_tracks ? album.number_of_tracks : 'Not available';
                        this.releaseYear = album.release_year ? album.release_year : 'Not available';
                        this.genre = album.genre ? album.genre[0] : 'Not available';
                    } else {
                        this.error = "No album was found. Please try again.";
                    }
                })
                .catch(error => {
                    console.log(error);
                    // Handle fetch error
                });
        },
        prevSlide() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
            }
        },
        nextSlide() {
            if (this.currentSlide < this.albumsData.length - 1) {
                this.currentSlide++;
            }
        }
    },
    computed: {
        artistName() {
            return this.albumsData[this.currentSlide] ? this.albumsData[this.currentSlide].artist_name[0] : 'Not available';
        },
        numberOfTracks() {
            return this.albumsData[this.currentSlide] ? this.albumsData[this.currentSlide].number_of_tracks : 'Not available';
        },
        releaseYear() {
            return this.albumsData[this.currentSlide] ? this.albumsData[this.currentSlide].release_year : 'Not available';
        },
        genre() {
            return this.albumsData[this.currentSlide] ? this.albumsData[this.currentSlide].genre[0] : 'Not available';
        }
    }
});
albumStore.mount("#app");