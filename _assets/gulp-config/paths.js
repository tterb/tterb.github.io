var paths = {};

// Directory locations.
paths.assetsDir        = '_assets/';      // The files Gulp will handle.
paths.jekyllDir        = '';              // The files Jekyll will handle.
paths.jekyllAssetsDir  = 'assets/';       // The asset files Jekyll will handle.
paths.siteDir          = '_site/';        // The resulting static site.
paths.siteAssetsDir    = '_site/assets/'; // The resulting static site's assets.

// Folder naming conventions.
paths.postFolder   = '_posts';
paths.draftFolder  = '_drafts';
paths.fontFolder   = 'fonts';
paths.imageFolder  = 'img';
paths.scriptFolder = 'js';
paths.stylesFolder = 'styles';
paths.downloadFolder = 'download';

// Asset files locations.
paths.sassFiles     = paths.assetsDir + paths.stylesFolder;
paths.jsFiles       = paths.assetsDir + paths.scriptFolder;
paths.imageFiles    = paths.assetsDir + paths.imageFolder;
paths.fontFiles     = paths.assetsDir + paths.fontFolder;
paths.downloadFiles = paths.assetsDir + paths.downloadFolder;

// Jekyll files locations.
paths.jekyllPostFiles  = paths.jekyllDir       + paths.postFolder;
paths.jekyllDraftFiles = paths.jekyllDir       + paths.draftFolder;
paths.jekyllCssFiles   = paths.jekyllAssetsDir + paths.stylesFolder;
paths.jekyllJsFiles    = paths.jekyllAssetsDir + paths.scriptFolder;
paths.jekyllImageFiles = paths.jekyllAssetsDir + paths.imageFolder;
paths.jekyllFontFiles  = paths.jekyllAssetsDir + paths.fontFolder;
paths.imageFolder;
paths.jekyllDownloadFiles  = paths.jekyllAssetsDir + paths.downloadFolder;

// Site files locations.
paths.siteCssFiles   = paths.siteAssetsDir + paths.stylesFolder;
paths.siteJsFiles    = paths.siteAssetsDir + paths.scriptFolder;
paths.siteImageFiles = paths.siteAssetsDir + paths.imageFolder;
paths.siteFontFiles  = paths.siteAssetsDir + paths.fontFolder;
paths.siteDownloadFiles  = paths.siteAssetsDir + paths.downloadFolder;

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
];

module.exports = paths;
