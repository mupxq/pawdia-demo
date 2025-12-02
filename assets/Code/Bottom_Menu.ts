import { _decorator, Component, Node, Prefab, Sprite } from 'cc';
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

    }
}

