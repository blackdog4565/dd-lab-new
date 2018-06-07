<template>
    <div class="main">
        <h2 class="main__h2">Flexbox Layout</h2>
        <div class="main__nav">
            <ul class="flex flex__nav">
                <li class="flex__nav_li">Home</li>
                <li class="flex__nav_li">Contacts</li>
                <li class="flex__nav_li">About me</li>
                <li class="flex__nav_li">Partners</li>
                <li class="flex__nav_li flex__nav_li-block"></li>
                <li class="flex__nav_li last-li">Sign in</li>
            </ul>
        </div>
        <div class="main__content">
            <div class="main__content_left-col">
                
                <div class="block-w-image-l">
                    <img class="block-w-img__img-f" src="../assets/first.png" alt="">
                    <div class="block-txt-f">
                        <h3 class="h3">Hello World</h3>
                        <p class="p-flex-grow">
                            Aliqua tempor et eu anim velit mollit laborum fugiat duis aute id sint irure. Occaecat et mollit consequat aliqua id nulla nulla exercitation fugiat pariatur pariatur incididunt. Elit id veniam enim veniam elit ut.
                        </p>
                        <div class="txt-info">
                            <p>By Joe Smith</p>
                            <p>42 comments</p>
                        </div>

                    </div>
                </div>
                <div class="block-txt">
                    <h3 class="h3">Hello World</h3>
                    <p class="p-flex-grow">
                        Sunt nisi adipisicing ad quis commodo cillum sunt.
                    </p>
                    <div class="txt-info">
                        <p>By Joe Smith</p>
                        <p>42 comments</p>
                    </div>
                </div>
                <div class="block-txt">
                    <h3 class="h3">Hello World</h3>
                    <p class="p-flex-grow">
                        Sunt nisi adipisicing ad quis commodo cillum sunt.
                    </p>
                    <div class="txt-info">
                        <p>By Joe Smith</p>
                        <p>42 comments</p>
                    </div>
                </div>
                <div class="block-txt">
                    <h3 class="h3">Hello World</h3>
                    <p class="p-flex-grow">
                        Sunt nisi adipisicing ad quis commodo cillum sunt.
                    </p>
                    <div class="txt-info">
                        <p>By Joe Smith</p>
                        <p>42 comments</p>
                    </div>
                </div>
            </div>
            <div class="main__content_right-col">
                <div class="right-top-section">
                    <div class="block-txt-f">
                        <h3 class="h3">Hello World</h3>
                        <p class="p-flex-grow">
                            Aliqua tempor et eu anim velit mollit laborum fugiat duis aute id sint irure. Occaecat et mollit consequat aliqua id nulla nulla exercitation fugiat pariatur pariatur incididunt. Elit id veniam enim veniam elit ut.
                        </p>
                        <div class="txt-info">
                            <p>By Joe Smith</p>
                            <p>42 comments</p>
                        </div>

                    </div>
                    <img class="block-w-img__img" src="../assets/second.png" alt="">
                </div>
                <div class="right-bot-section">
                    <div class="bot-section-1">
                        <img class="block-w-img__img" src="../assets/third.png" alt="">
                        <div class="block-w-image-bl">
                            

                            <div class="block-txt-f">
                                <h3 class="h3">Hello World</h3>
                                <p class="p-flex-grow">
                                    Aliqua tempor et eu anim velit mollit laborum fugiat duis aute id sint irure. Occaecat et mollit consequat aliqua id nulla nulla exercitation fugiat pariatur pariatur incididunt. Elit id veniam enim veniam elit ut.
                                </p>
                                <div class="txt-info">
                                    <p>By Joe Smith</p>
                                    <p>42 comments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bot-section-2">
                        <img class="block-w-img__img" src="../assets/fourth.png" alt="">
                        <div class="block-w-image-br">
                            
                            <div class="block-txt-f">
                                <h3 class="h3">Hello World</h3>
                                <p class="p-flex-grow">
                                    Aliqua tempor et eu anim velit mollit laborum fugiat duis aute id sint irure. Occaecat et mollit consequat aliqua id nulla nulla exercitation fugiat pariatur pariatur incididunt. 
                                </p>
                                <div class="txt-info">
                                    <p>By Joe Smith</p>
                                    <p>42 comments</p>
                                </div>

                            </div>
                        </div>
                        <div class="block-txt">
                                <h3 class="h3">Hello World</h3>
                                <p class="p-flex-grow">
                                    Sint minim cupidatat qui excepteur tempor reprehenderit cillum ullamco nostrud aute elit Lorem.                                    
                                </p>
                                <div class="txt-info">
                                    <p>By Joe Smith</p>
                                    <p>42 comments</p>
                                </div>

                            </div>
                            <div class="block-txt">
                                <h3 class="h3">Hello World</h3>
                                <p class="p-flex-grow">
                                    Sint minim cupidatat qui excepteur tempor reprehenderit cillum ullamco nostrud aute elit Lorem.
                               </p>
                                <div class="txt-info">
                                    <p>By Joe Smith</p>
                                    <p>42 comments</p>
                                </div>

                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'FlexBoxLayout',
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'media.scss';
@import '~reset-css/sass/_reset.scss';
    @include media('>=desktop'){
         .h3{
             
            font-size: 20px;
            font-weight: bold;
            color: #000;

         }
         .main__h2{
            font-size: 30px;
            font-weight: bold;
         }
        .main{
            width:1000px;
            margin: 0 auto;
          
        }
        .main__nav{
            margin-top: 20px;
        }
        .flex{
            display:flex;
        }
        .flex__nav{
            justify-content: space-between;
        }
        .flex__nav_li{
            width: 71px;
            list-style-type: none;
            padding: 10px;
            background-color: whitesmoke;
            color:gray;
        }
        .flex__nav_li-block{
            border: none;
            background-color: #968a6e   ;
            flex-grow: 0.8;
            
        }
        .main__content{
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            flex: 1;
            width: 100%;
        }
        .main__content_left-col{
            display: flex;
            flex-wrap: wrap;         
            width: 100%;

            
            
        }
        .block-w-image{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        .block-txt-f{
            display: flex;
            flex-direction: column; 
            text-align: left;
            color: grey;
            background-color: whitesmoke;
            padding: 30px;
            font-size: 14px;
            justify-content: space-between;
            flex-grow: 1;
        }
        .txt-info{
            display: flex;
            justify-content: space-between;
        }
        .block-txt{
            display: flex;
            flex-direction: column; 
            text-align: left;
            color: grey;
            background-color: whitesmoke;
            padding: 30px;
            font-size: 14px;
            margin-top: 20px;
            justify-content: space-between;
        }
        .p-flex-grow{
            flex-grow: 0.9;
        }
        .main__content_right-col{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left:20px;
            
        }
        .right-top-section{
            display: flex;
            width: 100%;
        }
        .right-bot-section{
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        .bot-section-1{
            
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            

        }
        .bot-section-2{
            
            margin-left: 20px;
            display: flex;
            flex-direction: column;
                flex: 0 0 250px;
            & .block-txt-f{
                min-height: 250px;
            }
            & .block-txt{
                min-height: 150px;
            } 
        }
        .block-w-image-bl{
            display: flex;
            flex: 1;
            flex-wrap: wrap;
        }
        .block-w-image-br{
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            
        }
        .block-w-image-l{
            display: flex;
            flex-direction: column;
            
        }
        .block-w-img__img{
            width: 100%;
        }
    }
    @include media('<desktop', '>=tablet'){
        .h3{
             
            font-size: 20px;
            font-weight: bold;
            color: #000;

         }
         .main__h2{
            font-size: 25px;
            font-weight: bold;
         }
         .main{
            width:750px;
            margin: 0 auto;
          
        }
        .main__nav{
            margin-top: 20px;
        }
        .flex{
            display:flex;
        }
        .flex__nav{
            justify-content: space-between;
        }
        .flex__nav_li{
            width: 71px;
            list-style-type: none;
            padding: 10px;
            background-color: whitesmoke;
            color:gray;
        }
        .flex__nav_li-block{
            border: none;
            background-color: #968a6e   ;
            flex-grow: 0.8;
            
        }
        .main__content{
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            flex: 1;
            width: 100%;
        }
        .main__content_left-col{
            display: flex;
            flex-wrap: wrap;         
            
            flex:1;
            
            
        }
        .block-w-image{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        .block-txt-f{
            display: flex;
            flex-direction: column; 
            text-align: left;
            color: grey;
            background-color: whitesmoke;
            padding: 30px;
            font-size: 14px;
            justify-content: space-between;
            flex-grow: 1;
        }
        .txt-info{
            display: flex;
            justify-content: space-between;
        }
        .block-txt{
            display: flex;
            flex-direction: column; 
            text-align: left;
            color: grey;
            background-color: whitesmoke;
            padding: 30px;
            font-size: 14px;
            margin-top: 20px;
            justify-content: space-between;
        }
        .p-flex-grow{
            flex-grow: 0.9;
            
        }
        .main__content_right-col{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left:20px;
            flex:1;
        }
        .right-top-section{
            display: flex;
            width: 100%;
            flex-wrap: wrap-reverse;
        }
        .right-bot-section{
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        .bot-section-1{
            
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            flex:1;

        }
        .bot-section-2{
            
            margin-left: 20px;
            display: flex;
            flex-direction: column;
                flex: 1;
            & .block-txt-f{
                min-height: 250px;
            }
            & .block-txt{
                min-height: 150px;
            } 
        }
        .block-w-image-bl{
            display: flex;
            flex: 1;
            flex-wrap: wrap;
        }
        .block-w-image-br{
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            
        }
        .block-w-image-l{
            display: flex;
            flex-direction: column;
            
        }
        .block-w-img__img{
            width: 100%;
        }
        .block-w-img__img-f{
            width: 100%;
            
        }
    }
    @include media('<tablet', '>=phone'){
        .h3{
             
            font-size: 14px;
            font-weight: bold;
            color: #000;

         }
         .main__h2{
            font-size: 20px;
            font-weight: bold;
         }
         .main{
            width:305px;
            margin: 0 auto;
            font-size: 12px;
        }
        .main__nav{
            margin-top: 20px;
        }
        .flex{
            display:flex;
        }
        .flex__nav{
            justify-content: flex-start;
            flex-wrap: wrap;
            

        }
        .flex__nav_li{
            width: 100%;
            list-style-type: none;
            padding: 10px 0px 10px 10px;
            background-color: whitesmoke;
            color:gray;
            border-bottom: 1px solid lightgray;
            text-align: left;
            
            order: 3;
        }
        .last-li{
            order: 1;
        }
        .flex__nav_li-block{
            border: none;
            background-color: #968a6e00   ;
            padding: 3px 10px;
            align-self: flex-start;
            order: 2;
        }
        .main__content{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            margin-top: 10px;
            flex: 1;
            width: 100%;
        }
        .main__content_left-col{
            display: flex;
            flex-wrap: wrap;         
            
            flex:1;
            
            
        }
        .block-w-image{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        .block-txt-f{
            display: flex;
            flex-direction: column; 
            text-align: left;
            color: grey;
            background-color: whitesmoke;
            padding: 15px;
            font-size: 12px;
            justify-content: space-between;
            flex-grow: 1;
        }
        .txt-info{
            display: flex;
            justify-content: space-between;
        }
        .block-txt{
            display: flex;
            flex-direction: column; 
            text-align: left;
            color: grey;
            background-color: whitesmoke;
            padding: 15px;
            font-size: 12px;
            margin-top: 5px;
            justify-content: space-between;
            flex-grow: 1;
        }
        .p-flex-grow{
            flex-grow: 0.9;
            padding:  10px 0px 15px 0px;
        }
        .main__content_right-col{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            flex:1;
        }
        .right-top-section{
            display: flex;
            width: 100%;
            flex-wrap: wrap-reverse;
        }
        .right-bot-section{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            margin-top: 5px;
        }
        .bot-section-1{
            
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

        }
        .bot-section-2{
            
            margin-top: 5px;
            display: flex;
            flex-direction: column;
                flex: 1;
            
        }
        .block-w-image-bl{
            display: flex;
            
            flex-wrap: wrap;
        }
        .block-w-image-br{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            
        }
        .block-w-image-l{
            display: flex;
            flex-direction: column;
            
            
        }
        .block-w-img__img{
            width: 100%;
            height: 100%;
        }
        .block-w-img__img-f{
            width: 100%;
            
        }
    }
</style>
