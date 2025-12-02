import { _decorator, Component, Node, Sprite, resources, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Background')
export class Background extends Component {
    @property(Sprite)
    backgroundSprite: Sprite | null = null;

    defaultBackgroundPath: string = 'textures/ui/home_page_bg_light/spriteFrame';

    start() {
        // 如果没有手动设置背景精灵，尝试在当前节点上查找
        if (!this.backgroundSprite) {
            this.backgroundSprite = this.node.getComponent(Sprite);
            if (!this.backgroundSprite) {
                console.warn('Background component requires a Sprite component on the same node');
                return;
            }
        }

        this.setBackgroundImage(this.defaultBackgroundPath);

        console.log('Background component initialized', this.backgroundSprite);
    }

    /**
     * 根据数据替换背景图片
     * @param backgroundData 背景数据，可以是图片路径或数据对象
     */
    setBackgroundImage(backgroundData: string | { path: string; [key: string]: any }) {
        const imagePath = typeof backgroundData === 'string'
            ? backgroundData
            : backgroundData.path;

        if (imagePath) {
            this.loadBackground(imagePath);
        } else {
            console.warn('Invalid background data provided');
        }
    }

    /**
     * 加载背景图片
     * @param imagePath 图片资源路径（格式：textures/ui/filename/spriteFrame）
     */
    private loadBackground(imagePath: string) {
        // 确保路径以 /spriteFrame 结尾
        const formattedPath = imagePath.endsWith('/spriteFrame')
            ? imagePath
            : `${imagePath}/spriteFrame`;

        resources.load(formattedPath, SpriteFrame, (err, spriteFrame) => {
            if (err) {
                console.error(`Failed to load background sprite frame: ${formattedPath}`, err);
                return;
            }

            if (this.backgroundSprite) {
                this.backgroundSprite.spriteFrame = spriteFrame;
                console.log(`Background loaded successfully: ${formattedPath}`);
            }
        });
    }

    /**
     * 获取背景节点
     */
    getBackgroundNode(): Node {
        return this.node;
    }

    /**
     * 获取背景精灵组件
     */
    getBackgroundSprite(): Sprite | null {
        return this.backgroundSprite;
    }

    update(_deltaTime: number) {
        // 预留给后续的帧更新逻辑
    }
}

