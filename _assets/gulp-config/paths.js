var paths = {};

// Directory locations.
paths.assetsDir        = '_assets/';      // The files Gulp will handle.
paths.jekyllDir        = '';              // The files Jekyll will handle.
paths.jekyllAssetsDir  = 'assets/';       // The asset files Jekyll will handle.
paths.siteDir          = '_site/';        // The resulting static site.
paths.siteAssetsDir    = '_site/assets/'; // The resulting static site's assets.
paths.styleGuideAssets = '_styleguide_assets';
paths.styleGuideDir    = 'styleguide';

// Folder naming conventions.
paths.postFolderName   = '_posts';
paths.draftFolderName  = '_drafts';
paths.fontFolderName   = 'fonts';
paths.imageFolderName  = 'img';
paths.scriptFolderName = 'js';
paths.stylesFolderName = 'styles';

// Asset files locations.
paths.sassFiles   = paths.assetsDir + paths.stylesFolderName;
paths.jsFiles     = paths.assetsDir + paths.scriptFolderName;
paths.imageFiles  = paths.assetsDir + paths.imageFolderName;
paths.fontFiles   = paths.assetsDir + paths.fontFolderName;

// Jekyll files locations.
paths.jekyllPostFiles  = paths.jekyllDir       + paths.postFolderName;
paths.jekyllDraftFiles = paths.jekyllDir       + paths.draftFolderName;
paths.jekyllCssFiles   = paths.jekyllAssetsDir + paths.stylesFolderName;
paths.jekyllJsFiles    = paths.jekyllAssetsDir + paths.scriptFolderName;
paths.jekyllImageFiles = paths.jekyllAssetsDir + paths.imageFolderName;
paths.jekyllFontFiles  = paths.jekyllAssetsDir + paths.fontFolderName;

// Site files locations.
paths.siteCssFiles   = paths.siteAssetsDir + paths.stylesFolderName;
paths.siteJsFiles    = paths.siteAssetsDir + paths.scriptFolderName;
paths.siteImageFiles = paths.siteAssetsDir + paths.imageFolderName;
paths.siteFontFiles  = paths.siteAssetsDir + paths.fontFolderName;
paths.siteStyleGuide = paths.siteDir       + paths.styleGuideDir;

// Glob patterns by file type.
paths.sassPattern     = '/**/*.scss';
paths.jsPattern       = '/**/*.js';
paths.imagePattern    = '/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)';
paths.markdownPattern = '/**/*.+(md|MD|markdown|MARKDOWN)';
paths.htmlPattern     = '/**/*.html';
paths.xmlPattern      = '/**/*.xml';

// Asset files globs
paths.sassFilesGlob  = paths.sassFiles  + paths.sassPattern;
paths.jsFilesGlob    = paths.jsFiles    + paths.jsPattern;
paths.imageFilesGlob = paths.imageFiles + paths.imagePattern;

// Jekyll files globs
paths.jekyllPostFilesGlob  = paths.jekyllPostFiles  + paths.markdownPattern;
paths.jekyllDraftFilesGlob = paths.jekyllDraftFiles + paths.markdownPattern;
paths.jekyllHtmlFilesGlob  = paths.jekyllDir        + paths.htmlPattern;
paths.jekyllXmlFilesGlob   = paths.jekyllDir        + paths.xmlPattern;
paths.jekyllImageFilesGlob = paths.jekyllImageFiles + paths.imagePattern;

// Site files globs
paths.siteHtmlFilesGlob = paths.siteDir + paths.htmlPattern;

// HTML pages to run through the accessibility test.
paths.htmlTestFiles = [
  '_site/**/*.html',
  '!_site/2015/**/*.*',
  '!_site/2016/**/*.*',
  '!_site/2017/**/*.*',
  '!_site/mission-and-values/**/*.*',
  '!_site/news/**/*.*',
  '!_site/styleguide/**/*.*',
  '!_site/team/**/*.*',
  '!_site/work/**/*.*',
  '!_site/blog/tag/cartography/index.html',
  '!_site/blog/tag/front-end-dev/index.html',
  '!_site/blog/tag/drupalcamp/index.html',
  '!_site/blog/tag/drupalcon/index.html',
  '!_site/blog/tag/efficiency/index.html',
  '!_site/blog/tag/tridug/index.html'
];

module.exports = paths;
