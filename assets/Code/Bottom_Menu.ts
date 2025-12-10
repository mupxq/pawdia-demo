import { _decorator, Component, Node, Prefab, Sprite, Label, director, SceneAsset } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bottom_Menu')
export class Bottom_Menu extends Component {

    @property(Prefab)
    Bottom_Button_Prefab: Prefab = null;

    @property(Node)
    Fishing_Preparation_Page_Node: Node = null;

    @property(Sprite)
    Planning_Page_Sprite_list: Sprite[] = [];

    @property(Sprite)
    Next_Page_Button_Sprite: Sprite = null;

    @property(Sprite)
    Go_Back_Button_Sprite: Sprite = null;

    @property(Sprite)
    Go_Fishing_Button_Sprite: Sprite = null;

    //fishing 场景节点导入
    @property(Node)
    Fishing_Loading_Node: Node = null;

    @property(Label)
    Loading_Label: Label = null;

    private currentPage: number = 0;

    start() {
        this.updatePageDisplay();
    }

    Flishing_Home_Button_click() {
        this.Fishing_Preparation_Page_Node.active = true;
    }

    Home_Preper_Button_click() {
        this.Fishing_Preparation_Page_Node.active = false;
    }

    Go_Fishing_Button_click() {
        this.Fishing_Loading_Node.active = true;

        const loadingTime = 1500; // 1.5秒加载时间
        const updateInterval = 100; // 每100毫秒更新一次
        let elapsedTime = 0;

        // 模拟加载进度更新
        const interval = setInterval(() => {
            elapsedTime += updateInterval;
            let progress = (elapsedTime / loadingTime) * 100;

            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);

                // 更新最终进度
                if (this.Loading_Label) {
                    this.Loading_Label.string = `100%`;
                }

                // 加载完成后切换场景
                director.loadScene('C_fishing', (err) => {
                    if (err) {
                        console.error('场景加载失败:', err);
                        return;
                    }
                    console.log('C_fishing场景加载完成');
                });
            } else {
                // 更新进度标签
                if (this.Loading_Label) {
                    this.Loading_Label.string = `${Math.floor(progress)}%`;
                }
            }
        }, updateInterval);
    }

    next_page() {
        if (this.currentPage < this.Planning_Page_Sprite_list.length - 1) {
            this.currentPage++;
            this.updatePageDisplay();
        }
    }

    Back() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.updatePageDisplay();
        }
    }

    private updatePageDisplay() {
        // Hide all sprites first
        for (let i = 0; i < this.Planning_Page_Sprite_list.length; i++) {
            if (this.Planning_Page_Sprite_list[i]) {
                this.Planning_Page_Sprite_list[i].node.active = false;
            }
        }

        // Show sprites for current page and all previous pages
        for (let i = 0; i <= this.currentPage; i++) {
            if (this.Planning_Page_Sprite_list[i]) {
                this.Planning_Page_Sprite_list[i].node.active = true;
            }
        }

        // Handle button visibility
        const isLastPage = this.currentPage >= this.Planning_Page_Sprite_list.length - 1;

        if (this.Next_Page_Button_Sprite) {
            this.Next_Page_Button_Sprite.node.active = !isLastPage;
        }

        if (this.Go_Back_Button_Sprite) {
            this.Go_Back_Button_Sprite.node.active = isLastPage;
        }
    }

    update(deltaTime: number) {
        // 移除未使用的deltaTime参数警告
    }
}

