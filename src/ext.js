export default {
  definition: {
    type: "items",
    component: "accordion",
    items: {
      appearance: {
        uses: "settings",
        items: {
          iFrameSettings: {
            type: "items",
            label: "iFrame settings",
            items: {
              src: {
                ref: "props.src",
                label: "iFrame URL",
                type: "string",
              },
            },
          },
        },
      },
    },
  },
  support: {
    snapshot: false,
    export: true,
    sharing: false,
    exportData: true,
    viewData: true,
  },
};
