#!/bin/bash

Black='\033[0;30m'
Dark_Gray='\033[1;30m'
Red='\033[0;31m'
Light_Red='\033[1;31m'
Green='\033[0;32m'
Light_Green='\033[1;32m'
Brown='\033[0;33m'
Yellow='\033[1;33m'
Blue='\033[0;34m'
Light_Blue='\033[1;34m'
Purple='\033[0;35m'
Light_Purple='\033[1;35m'
Cyan='\033[0;36m'
Light_Cyan='\033[1;36m'
Light_Gray='\033[0;37m'
White='\033[1;37m'
NC='\033[0m' 

echo -e "${Cyan}Creating Compenent...${NC}" 

echo "Enter src path:" 
read path;
current_dir=`pwd`
source_dir="src"
dir_path=`dirname $path`
dir_folder=`basename $path`

# echo $dir_path

## MOVE IN /src ##
cd $source_dir

## CREATE NEW COMPONENT FOLDER ##
mkdir $dir_path/$dir_folder
echo -e "${Light_Blue}Folder ${Yellow} ${dir_folder} ${Green} Created"

## MOVE IN NEW COMPONENT FOLDER ##
cd $dir_path/$dir_folder

## GENERATE FOLDER AND FILES ##
mkdir css
touch index.js
touch $dir_folder.jsx
touch $dir_folder.test.js

## GENERATE CSS FOLDER ##
cd css
touch $dir_folder.module.scss
touch $dir_folder.css.js

## MOVE ONE FOLDER BACK ##
cd ../

## WRITE .jsx FILE ##
cat > $dir_folder.jsx <<EOL
import module_css from "./css/$dir_folder.module.scss"
import js_css from "./css/$dir_folder.css.js" 
EOL

echo -e "${Cyan}Compenent Created${NC}" 

