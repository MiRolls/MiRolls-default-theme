import {driver} from 'driver.js'

const make_roll = () => {
    const config = driver({
        showProgress: true,
        steps: [
            {
                element: "#MakePageLeftControl",
                popover: {
                    title: "添加题目",
                    description: "你可以通过左边的控制栏来添加题目"
                }
            },
            {
                element: ".topic",
                popover: {
                    title: "编辑题目",
                    description: "你可以通过这些项目来更改你的题目的信息，例如选项名称等"
                }
            },
            {
                element: ".delButton",
                popover: {
                    title: "删除题目",
                    description: "你可以点击这个按钮来删除一个题目"
                }
            },
            {
                element: ".bottomControl",
                popover: {
                    title: "提交与标题",
                    description: "在这里你可以编辑你的标题，也可以设置保存为草稿箱/提交问卷"
                }
            }
        ]
    })
    config.drive()
}

export default make_roll