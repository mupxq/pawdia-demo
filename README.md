# Pawdia Demo 1

一个使用 Cocos Creator 3.8.7 开发的 2D 移动游戏演示项目。

## 项目概述

这是 Pawdia 系列的第一个演示项目，展示了基础的移动游戏开发架构和用户界面设计。项目配置为移动端开发，采用竖屏设计分辨率。

### 技术栈

- **游戏引擎**: Cocos Creator 3.8.7
- **开发语言**: TypeScript
- **目标平台**: 移动端 (Android/iOS) 和 Web Mobile
- **渲染模式**: 2D 游戏，支持 WebGL/WebGL2

## 项目结构

```
assets/
├── Code/                    # TypeScript 游戏脚本
│   ├── Init.ts             # 初始化脚本
│   ├── Start.ts            # 开始场景逻辑
│   ├── Home.ts             # 主页场景逻辑
│   ├── Background.ts       # 背景管理脚本
│   └── Bottom_Menu.ts      # 底部菜单组件
├── Prefabs/                # 可复用的预制体组件
│   ├── Bottom_Menu.prefab  # 底部菜单预制体
│   └── Status_Bar_Up.prefab # 顶部状态栏预制体
├── Scene/                  # 游戏场景
│   ├── C_Start.scene       # 开始场景
│   └── C_Home.scene        # 主页场景
└── resources/              # 游戏资源
    └── textures/ui/        # UI 纹理资源
        ├── Start_Page_Bg.png      # 开始页面背景
        ├── logo.png              # 游戏标志
        ├── start_button.png      # 开始按钮
        ├── home_page_bg_light.png # 主页浅色背景
        ├── home_page_bg_dark.png  # 主页深色背景
        ├── status_bar_up.png     # 顶部状态栏
        ├── home_button.png       # 主页按钮
        ├── bag_button.png        # 背包按钮
        ├── phone_button.png      # 电话按钮
        ├── setting_button.png    # 设置按钮
        ├── fishing_button.png    # 钓鱼按钮
        ├── cat.png               # 猫咪角色
        ├── map_bg.png            # 地图背景
        ├── map.png               # 地图
        ├── trevel_planing.png    # 旅行规划
        ├── trevel_plan_tools.png # 旅行规划工具
        ├── back_button.png       # 返回按钮
        ├── next_button.png       # 下一步按钮
        └── go_button.png         # GO按钮
```

## 功能特性

### 已实现功能

- ✅ **开始场景**: 包含游戏标志、背景和开始按钮
- ✅ **主页场景**: 完整的主页界面，包含角色和功能按钮
- ✅ **底部菜单**: 可复用的底部导航菜单组件
- ✅ **顶部状态栏**: 状态信息显示组件
- ✅ **场景切换**: 开始页面到主页的平滑过渡
- ✅ **加载进度**: 场景预加载时的进度显示

### 核心组件

- **Init.ts**: 游戏初始化管理器
- **Start.ts**: 开始场景控制器，处理用户交互和场景转换
- **Home.ts**: 主页场景控制器，管理主页逻辑
- **Bottom_Menu.ts**: 底部菜单组件，处理导航功能
- **Background.ts**: 背景管理，支持背景切换和动画

## 开发环境设置

### 系统要求

- **Cocos Creator**: 3.8.7 或更高版本
- **Node.js**: 建议使用 LTS 版本
- **目标平台**: 支持 Android、iOS 开发环境

### 安装和运行

1. **克隆项目**
   ```bash
   git clone [repository-url]
   cd pawdia-demo-1
   ```

2. **用 Cocos Creator 打开**
   - 启动 Cocos Creator 3.8.7
   - 选择 "打开其他项目"
   - 选择项目根目录

3. **预览项目**
   - 在 Cocos Creator 编辑器中点击预览按钮
   - 或使用快捷键 `Ctrl+P` (Windows) / `Cmd+P` (Mac)

### 构建发布

1. 在 Cocos Creator 中选择 "项目" → "构建发布"
2. 选择目标平台：
   - **Web Mobile**: 浏览器移动端版本
   - **Android**: Android 应用
   - **iOS**: iOS 应用
3. 配置构建设置并点击 "构建"

## 游戏设计

### 用户界面

- **设计分辨率**: 720x1280 (竖屏)
- **UI 风格**: 卡通风格，明亮色彩
- **交互方式**: 触屏点击操作

### 场景流程

```
C_Start.scene (开始场景)
    ↓ [点击开始按钮]
C_Home.scene (主页场景)
    ↓ [底部菜单导航]
    ├── 主页功能
    ├── 背包系统
    ├── 钓鱼游戏
    └── 设置页面
```

## 开发指南

### 脚本开发

- 所有 TypeScript 脚本位于 `assets/Code/` 目录
- 使用 `@ccclass` 装饰器定义组件
- 遵循 Cocos Creator 组件开发模式

### 资源管理

- 纹理资源放置在 `assets/resources/textures/` 目录
- 创建预制体实现组件复用
- 场景文件包含游戏对象和组件配置

### 最佳实践

1. **组件化开发**: 创建可复用的预制体组件
2. **资源优化**: 使用适当的纹理压缩和格式
3. **性能考虑**: 移动端性能优化，注意 Draw Call
4. **代码规范**: 使用 TypeScript 进行类型安全开发

## 版本信息

- **当前版本**: 1.0.0
- **引擎版本**: Cocos Creator 3.8.7
- **最后更新**: 2024年

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

如有问题或建议，请通过以下方式联系：

- 项目 Issues: [GitHub Issues](https://github.com/your-repo/issues)
- 开发团队邮箱: [your-email@example.com]

---

**Pawdia Demo 1** - 展示现代移动游戏开发的最佳实践 🎮