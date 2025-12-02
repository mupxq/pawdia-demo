# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Cocos Creator 3.8.7 2D game project configured for mobile development. The project is set up for 2D games with a design resolution of 720x1280, optimized for mobile devices.

## Development Commands

### Opening the Project
- Open the project directory in Cocos Creator 3.8.7 to access the visual editor
- Most development work happens through the Cocos Creator interface

### Building and Running
- Build projects through Cocos Creator's "Project" → "Build" menu
- Available platforms: Web Mobile, Android, iOS, and other supported Cocos Creator platforms
- No command-line build system - all builds managed through Cocos Creator

### Asset Management
- All source files are in the `assets/` directory
- Assets are automatically processed into the `library/` directory (do not edit library files)
- Scene files (.scene) are the primary way to organize game content

## Architecture

### Directory Structure
```
assets/
├── Code/           # TypeScript/JavaScript game scripts (currently empty)
├── Prefab/         # Reusable prefab components (currently empty)
├── Scene/          # Game scenes (C_Home.scene, C_Start.scene)
└── resources/      # Game resources and textures
    └── textures/   # UI textures and sprite assets
```

### Key Configuration
- **Engine Modules**: Configured for 2D development with essential modules
- **Physics**: 2D physics enabled (Box2D integration available)
- **Animation**: 2D animation + skeletal animation (Spine 3.8, DragonBones)
- **UI**: Rich text, masks, and advanced UI components enabled
- **External Assets**: Tiled map support and WebView integration available

### Current Game Structure
- **C_Start.scene**: Likely the initial game scene
- **C_Home.scene**: Home or menu scene
- All assets currently use placeholder naming convention (C_ prefix)

## Development Guidelines

### Script Organization
- Place all TypeScript/JavaScript scripts in `assets/Code/`
- Follow Cocos Creator component patterns when creating scripts
- Use the `@ccclass` decorator for component definitions

### Asset Management
- Scene files contain game objects and component configurations
- Textures and UI elements should go in `assets/resources/textures/`
- Create prefabs for reusable game objects in `assets/Prefab/`
- Each asset directory should have a corresponding `.meta` file (auto-generated)

### Code Configuration
- TypeScript is configured with `strict: false` in tsconfig.json
- Extends Cocos Creator's base TypeScript configuration
- No custom build pipeline or external dependencies configured

### Platform Considerations
- Target resolution: 720x1280 (portrait mobile)
- WebGL and WebGL2 rendering supported
- Cross-platform deployment through Cocos Creator's build system

## Current Project State

This is a fresh Cocos Creator project with:
- ✅ Basic project structure and configuration
- ✅ Two scenes created (Start and Home)
- ✅ UI texture assets prepared
- ✅ Engine modules configured for 2D game development
- ❌ No custom scripts yet (empty Code directory)
- ❌ No prefabs created yet
- ❌ No game mechanics implemented

The project is ready for implementing game logic, creating custom components, and building the actual game content.