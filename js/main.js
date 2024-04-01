const albumStore = Vue.createApp({
    data() {
        return {
            albumsData: [],
            currentAlbumIndex: 0,
            artistName: "",
            numberOfTracks: 0,
            releaseYear: "",
            genre: "",
            error: "",
            loading: true
        }
    },
    created() {
        // Fetch album data when the app is created
        fetch('http://localhost/albumstore_api/public/models')
            .then(res => res.json())
            .then(data => {
                this.albumsData = data;
                this.loading = false;
                this.updateAlbumInfo();
            })
            .catch(error => {
                console.error('Error fetching album data:', error);
                this.error = "Failed to fetch album data. Please try again later.";
                this.loading = false; 
            });
    },
    methods: {
        // showing previous album
        showPrevAlbum() {
            if (this.currentAlbumIndex > 0) {
                this.currentAlbumIndex--;
                this.updateAlbumInfo();
            }
        },
        // showing next album
        showNextAlbum() {
            if (this.currentAlbumIndex < this.albumsData.length - 1) {
                this.currentAlbumIndex++;
                this.updateAlbumInfo();
            }
        },
        // Method to update album info based on currentAlbumIndex
        updateAlbumInfo() {
            const album = this.albumsData[this.currentAlbumIndex];
            this.artistName = album.artist_name ? album.artist_name[0] : 'Not available';
            this.numberOfTracks = album.number_of_tracks ? album.number_of_tracks : 'Not available';
            this.releaseYear = album.release_year ? album.release_year : 'Not available';
            this.genre = album.genre ? album.genre[0] : 'Not available';
        }
    },
    computed: {
        // Computed properties to get album information based on currentAlbumIndex
        currentAlbum() {
            return this.albumsData[this.currentAlbumIndex] || {};
        }
    }
});

window.addEventListener('load', function() {
    document.querySelector('.loading-spinner').style.display = 'block';
});

window.addEventListener('load', function() {
    document.querySelector('.loading-spinner').style.display = 'none';
});


albumStore.mount("#app");