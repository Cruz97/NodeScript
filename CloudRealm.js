
 const AppSchema = {
    name: 'App',
    primaryKey: 'uuid',
    properties: {
      uuid: 'string?',
      name: 'string?',
      name2: 'string?',
      icon: 'string?',
      icon_alt: 'string?',
      loading_icon: 'string?',
      loading_bg: 'string?',
      theme_color_primary: 'string?',
      theme_color_secondary: 'string?',
      theme_color_success: 'string?',
      theme_color_info: 'string?',
      theme_color_warning: 'string?',
      theme_color_danger: 'string?',
      theme_bg: 'string?',
      theme_bg_alt: 'string?',
      login_bg: 'string?',
      login_mode: 'string?',
      theme_color_text_primary: 'string?',
      theme_color_text_secondary: 'string?',
      host: 'string?',
      port: 'int?',
      database: 'string?',
      username: 'string?', 
      password: 'string?',
      protocol: 'string?',
      token: 'string?',
      secret: 'string?'  
    }
  }
  
   const LanguageSchema = {
    name: 'Language',
    primaryKey: 'uuid',
    properties: {
      uuid: 'string?',
      name: 'string?',
      language: 'string?'
    }
  }
  
   const TranslateSchema = {
    name: 'Translate',
    primaryKey: 'uuid',
    properties: {
      uuid: 'string?',
      section: 'string?',
      label: 'string?',
      value: 'string?',
      app_id: 'App?',
      language: 'Language?'
    }
  }

   const AppContentSchema = {
    name: 'AppContent',
    primaryKey: 'uuid',
    properties: {
      uuid: 'string?',
      app_id: 'App?',
      title: 'string?',
      type_id: 'AppContentType[]',
      categories: 'AppContentCategory[]',
      subtitle: 'string?',
      date: 'date?',
      image: 'AppImage?',
      body: 'string?',
      gallery: 'AppImage[]',
      summary: 'string?',
      sections: 'AppSection[]'
    }
  }

   const AppSection = {
      name: 'AppSection',
      primaryKey: 'uuid',
      properties: {
          uuid: 'string?',
          name: 'string?',
          items: 'AppSectionItem[]'
      }
  }

   const AppSectionItem = {
    name: 'AppSectionItem',
    primaryKey: 'uuid',
    properties: {
        uuid: 'string?',
        content_id: 'AppContent?',
        sequence: 'int?'
    }
}

   const AppItemBody = {
      name: 'AppItemBody',
      primaryKey: 'uuid',
      properties: {
          uuid: 'string?',
          app_id: 'string?',
          title: 'string?',
          subtitle: 'strng?',
          image: 'string?',
          text: 'string?',
          item_paragraph: 'ItemParagraph[]'
      }
  }

   const ItemParagraph = {
    name: 'ItemParagraph',
    primaryKey: 'uuid',
    properties: {
        uuid: 'string?',
        app_id: 'string?',
        title: 'string?',
        paragraph: 'strng?'
    }
  }
  
   const AppContentTypeSchema = {
    name: 'AppContentType',
    primaryKey: 'uuid',
    properties: {
      uuid: 'string?',
      app_id: 'string?',
      name: 'string?',
      type: 'string?', 
      icon: 'string?',
      appid: 'App?'
    }
  }
  
   const AppContentCategorySchema = {
    name: 'AppContentCategory',
    primaryKey: 'uuid',
    properties: {
      uuid: 'string?',
      app_id: 'App?',
      name: 'string?',
      icon: 'string?',
      type: 'string?'
    }
  }

   const AppContentTagSchema = {
    name: 'AppContentTag',
    primaryKey: 'uuid',
    properties: {
      uuid: 'string?',
      app_id: 'App?',
      name: 'string?',
      icon: 'string?',
      type: 'string?'
    }
  }


   const Rel_Content_Type = {
      name: 'AppRel_Content_Type',
      primaryKey: 'uuid',
      properties: {
          uuid: 'string?',
          content_id: 'AppContent?',
          type_id: 'AppContentType?'
      }
  } 

   const Rel_Content_Category = {
    name: 'AppRel_Content_Category',
    primaryKey: 'uuid',
    properties: {
        uuid: 'string?',
        content_id: 'AppContent?',
        type_id: 'AppContentCategory?'
    }
} 

 const Rel_Content_Tag = {
    name: 'AppRel_Content_Tag',
    primaryKey: 'uuid',
    properties: {
        uuid: 'string?',
        content_id: 'AppContent?',
        type_id: 'AppContentTag?'
    }
}
  
   const AppContentItemSchema = {
    name: 'AppContentItem',
    primaryKey: 'uuid',
    properties: {
      uuid: 'string?',
      app_id: 'App?',
      name: 'string?',
      type: 'string?',
      icon: 'string?'
    }
  }
  
  
   const AppContentSectionSchema = {
    name: 'AppContentSection',
    primaryKey: 'uuid',
    properties: {
      uuid: 'string?',
      app_id: 'App?',
      name: 'string?',
      items: 'AppSectionItem[]'
    }
  }
  
  
  //  const AppSectionItemSchema = {
  //   name: 'AppSectionItem',
  //   primaryKey: 'uuid',
  //   properties: {
  //     uuid: 'string?',
  //     sequence: 'int?',
  //     post_id: 'int?'
  //   }
  // }
  
  
   const AppImageSchema = {
    name: 'AppImage',
    primaryKey: 'uuid',
    properties: {
      uuid: 'string?',
      app_id: 'string?',
      name: 'string?',
      url: 'string?',
      caption: 'string?'
    }
  }

  //  const Realm = require('realm');
  
  // class stringObject extends Realm.Object {}

  // stringObject.AppMenuSchema = {
  //   name: 'AppMenu',
  //   primaryKey: 'uuid',
  //   properties: {
  //     uuid: { type: 'string?'},
  //     //app_id: 'App?',
  //     title_menu: { type: 'string?'},
  //     icon: {type : 'string?'},
  //     color: { type: 'string?'},
  //     tintcolor: { type: 'string?'},
  //   }
  // }
  
module.exports = [
  AppSchema,
  LanguageSchema, 
  TranslateSchema,
  AppContentSchema,
  AppSection,
  AppSectionItem,
  AppContentTypeSchema,
  AppContentCategorySchema,
  AppContentTagSchema,
  Rel_Content_Category,
  Rel_Content_Tag,
  Rel_Content_Type,
  AppContentItemSchema,
  AppContentSectionSchema,
  AppImageSchema





];

  
  
  
  
  