## 作者：张华    联系方式：15051887544
## 开发计划
### 1、数据资源管理
* 项目信息管理：数据资源尽量关联项目管理。
* GIS类原始数据管理（增删改查及预览）：按shp矢量、影像、地形、倾斜摄影等分类，每类一个菜单。
* BIM类原始数据管理（增删改查）：ABC格式模型分类、IFC及其他通用三维模型（如fbx、obj、3dmax）等
* 数据成果管理：按处理后的格式合并分类管理，如ABC格式模型最终都归类为3dtiles

### 2、视景器功能集
* 模型预览基础功能
* 构件属性查看
* 实现业务信息的实时拉取

### 3、数据中台功能
* 维护或者载入业务数据库表
* 在线关联构件和业务信息

## 开发环境

```bash
# 克隆项目
git clone https://gitee.com/y_project/RuoYi-Vue

# 进入项目目录
cd ruoyi-ui

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npmmirror.com

# 启动服务
npm run dev
```



## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```