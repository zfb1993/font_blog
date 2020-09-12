<template>
    <div class="category">
        <section class="content">
            <h1>
                Tags
            </h1>
            <ul>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">网络保安</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">在线上早班</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">键盘侠</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">网络保安</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">在线上早班</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">键盘侠</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">网络保安</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">在线上早班</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">键盘侠</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">网络保安</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">在线上早班</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">键盘侠</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">网络保安</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">在线上早班</a>
                </li>
                <li class="category-list-item">
                    <a class="category-list-link" href="javascript:void(0)">键盘侠</a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name:'tags'
}
</script>

<style lang="scss" scoped>
    .category{
        padding-top: 45px;
        padding-left: 320px;
        background-clip: content-box;
        section{
            width:60%;
            text-align: left;
            padding-left: 40px;
            h1{
                margin-top: 20px;
                text-align: left;
                font-size: 30px;
            }
            ul{
                margin-top: 40px;
                display: flex;
                flex-wrap: wrap;
                li {
                    a{
                        margin: 4px 6px 4px 0;
                        display: inline-table;
                        padding: 10px 20px;
                        background: #1f3041;
                        border-radius: 6%;
                        vertical-align: middle;
                        color: cadetblue;
                        font-size: 1.2em;
                        &:hover{
                            transition: all ease-out 0.5s;
                            transform: scale(1.1, 1.1);
                            color: aliceblue;
                        }
                    }
                    span{
                            color: aqua;
                            align-self: baseline;
                    }
                }
            }
        }
    }
@media print, screen and (max-width: 800px) {
  .category{
      padding-left: 5%;
      padding-right: 5%;
      transition: all ease-out 0.5s;
      section{
          width: 80%;
      }
  }
}
</style>