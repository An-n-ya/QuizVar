<template>
  <VueEditor :editor="editor" />
</template>

<script>
import { defineComponent } from "vue";
import {
  Editor,
  rootCtx,
  defaultValueCtx,
  themeFactory,
  editorViewOptionsCtx,
} from "@milkdown/core";
import { VueEditor, useEditor } from "@milkdown/vue";
import { commonmark } from "@milkdown/preset-commonmark";

// 监听器插件
import { listener, listenerCtx } from "@milkdown/plugin-listener";
// Prism 高亮
import { prism } from "@milkdown/plugin-prism";

const customTheme = themeFactory({
  font: {
    typography: ["Roboto", "Helvetica", "Arial"],
    code: ["Monaco", "Fira Code"],
  },
  size: {
    radius: "2px",
    lineWidth: "1px",
  },
  color: {
    primary: "#ff79c6",
    secondary: "#bd93f9",
    neutral: "#000",
    background: "#fff",
  },
});

export default defineComponent({
  name: "Milkdown",
  components: {
    VueEditor,
  },
  props: ["modelValue", "readonly"],
  emits: ["update:modelValue"],
  setup(props, context) {
    let defaultValue = props.modelValue;
    if (!defaultValue) {
      defaultValue = "Quiz 答案";
    }
    let editor = useEditor((root) =>
      Editor.make()
        .config((ctx) => {
          ctx.set(rootCtx, root);
          //   设置默认值
          ctx.set(defaultValueCtx, defaultValue);
          //   设置监听器
          ctx.set(listenerCtx, {
            markdown: [
              (get) => {
                context.emit("update:modelValue", get());
              },
            ],
          });
          //   设置是否可编辑
          ctx.set(editorViewOptionsCtx, { editable: () => !props.readonly });
        })
        .use(customTheme)
        .use(commonmark)
        .use(listener)
        .use(prism)
    );
    return {
      editor,
    };
  },
});
</script>
<style>
/* 关掉语言选择器 */
.code-fence_select-wrapper {
  display: none;
}
.milkdown .code-fence {
  background-color: #edeff4;
  border-radius: 10px;
}

.milkdown .editor {
  outline: none;
}
.milkdwon .editor p {
  font-size: 14px;
}
</style>