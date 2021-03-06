//! $ID: user.js 2022.01.04 Tpb.Config $
// +++++++++++++++++++++++++++++++++++++++++
//  Project: Tpb v0.4.1
//  E-Mail:  zhliner@gmail.com
//  Copyright (c) 2021 铁皮工作室  MIT License
//
//////////////////////////////////////////////////////////////////////////////
//
//  用户Web配置。
//  上级应用可在此配置并自行导入，但tplRoot的名称不可变。
//
///////////////////////////////////////////////////////////////////////////////
//

const
    //
    // 应用：编辑器安装根。
    // 由用户安装后修改，注意末尾的斜线/。
    // 注记：
    // 上层应用的配置嵌入此处，便于开发版源码到正式版的更新覆盖，
    // 即开发版和正式版的此文件虽然不同但各自不变。
    //
    //ROOT = 'https://cooljed.github.io/',
    ROOT = `${location.origin}/`,

    //
    // Tpb：本系模板根。
    // 用于获取模板节点的Tpb接口，注意末尾的斜线/。
    // https://zhliner.github.io/coolj/templates/
    //
    tplRoot = `${ROOT}templates/`;


export { ROOT, tplRoot };

