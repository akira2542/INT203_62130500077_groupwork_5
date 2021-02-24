
    const app = Vue.createApp({
        data() {
            return {
                pics : [{
                        title : "Autumn Season",
                        like : false,
                        style : "background-image: url(images/1.jpg);",
                        selected : false
                    },{ 
                        title : "Honeymoon at Paris",
                        like : false, 
                        style : "background-image: url(images/2.jpg);",
                        selected : false
                    }, 
                    {
                        title : "Valentine's Gift",
                        like : false,
                        style : "background-image: url(images/3.jpg);",
                        selected : false
                    }
                    ],
                    isSearchOn : false,
                    haveResult: true,
                    viewpics : [],
                    searchtext : "",
                    carousel : {
                        isActive: false,
                        pic: {},
                        index : -1
                    }    
            }
        },
        methods : {
            toggleLike(index) {
                this.pics[index].like = !this.pics[index].like
            },
            toggleSearch() {
                if (this.isSearchOn) {
                    this.viewpics = [...this.pics]
                    this.haveResult = true
                }
                this.isSearchOn = !this.isSearchOn
            },
            handleSelect(index) {
                if (this.carousel.index > -1 && this.carousel.index < this.viewpics.length) {
                    this.viewpics[this.carousel.index].selected = false
                }
                const selectedpic = this.viewpics[index]
                selectedpic.selected = true
                this.carousel.index = index
                this.carousel.pic = selectedpic
                this.carousel.isActive = true
            }
        },
        watch : {
            searchtext : function() {
                const query = this.searchtext.toLowerCase();
                this.viewpics = this.pics.filter(pic => pic.title.toLowerCase().search(query) > -1)
                this.haveResult = this.viewpics.length > 0 
            }
        }
        ,
        computed : {
            countGallery() {
                return this.pics.length
            },
            countLike() {
                return this.pics.filter(pic => pic.like).length   
            }
        },
        beforeMount() {
            this.viewpics = [...this.pics]
        }   
    }
    )







    
