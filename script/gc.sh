#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: yarn gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi
NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"
# mkdir -p "$DIRNAME/__tests__"

cat > $DIRNAME/src/$INPUT_NAME.vue <<EOF
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'O${NAME}',
  props: { },
  setup(props) {
    // init here
  },
})
</script>

<style lang="scss" scoped>
</style>
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { App } from 'vue'
import O${NAME} from './src/$INPUT_NAME.vue'

O${NAME}.install = (app: App): void => {
  app.component(O${NAME}.name, O${NAME})
}

export default O${NAME}
EOF

# cat > $DIRNAME/package.json <<EOF
# {
#   "name": "@otimes-ui/$INPUT_NAME",
#   "version": "0.0.0",
#   "main": "dist/index.js",
#   "license": "MIT",
#   "peerDependencies": {
#     "vue": "3.1.1"
#   },
#   "devDependencies": {
#     "@vue/test-utils": "^2.0.0-beta.3"
#   }
# }
# EOF

# cat > $DIRNAME/__tests__/$INPUT_NAME.spec.ts <<EOF
# import { mount } from '@vue/test-utils'
# import $NAME from '../src/index.vue'

# const AXIOM = 'Rem is the best girl'

# describe('$NAME.vue', () => {
#   test('render test', () => {
#     const wrapper = mount($NAME, {
#       slots: {
#         default: AXIOM,
#       },
#     })
#     expect(wrapper.text()).toEqual(AXIOM)
#   })
# })
# EOF
