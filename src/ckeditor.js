/* eslint-disable space-in-parens */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable quotes */
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Fontsize from '@ckeditor/ckeditor5-font/src/fontsize';
import Fontcolor from '@ckeditor/ckeditor5-font/src/fontcolor';
import Fontbackgroundcolor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import Fontfamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
export default class ClassicEditor extends ClassicEditorBase { }

function RemoveFormatLinks(editor) {
    // Extend the editor schema and mark the "linkHref" model attribute as formatting.
    editor.model.schema.setAttributeProperties('linkHref', {
        isFormatting: true
    });
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
    Alignment,
    Essentials,
    HorizontalLine,
    UploadAdapter,
    Autoformat,
    Bold,
    Italic,
    BlockQuote,
    CKFinder,
    EasyImage,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageResize,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    Table,
    TableToolbar, Bold, Italic, Underline, Strikethrough, Code, Subscript, Superscript,
    Base64UploadAdapter,
    Fontsize,
    Fontcolor,
    Fontfamily,
    Fontbackgroundcolor,
    RemoveFormat,
    RemoveFormatLinks
];

// Editor configuration.
ClassicEditor.defaultConfig = {
    mediaEmbed: {
        previewsInData: true,
        // 视频预览
        providers: [ {
            name: 'youtube',
            url: [
                /^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,
                /^(?:m\.)?youtube\.com\/v\/([\w-]+)/,
                /^youtube\.com\/embed\/([\w-]+)/,
                /^youtu\.be\/([\w-]+)/
            ],
            html: match => {
                const id = match[ 1 ];
                return (
                    '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' +
                    `<iframe src="https://www.youtube.com/embed/${ id }" ` +
                    'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
                    'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
                    '</iframe>' +
                    '</div>'
                );
            }
        }, ],
        removeProviders: [ 'instagram', 'twitter', 'googleMaps', 'flickr', 'facebook' ]
    },
    alignment: {
        options: [ 'left', 'right', 'center', 'justify' ]
    },
    fontSize: {
        options: [ 'default', 12, 14, 18, 22, 32, 48 ]
    },
    fontbackgroundcolor: {
        columns: 5,
        colors: [ {
            color: 'hsl(0, 0%, 0%)',
            label: 'Black'
        },
        {
            color: 'hsl(0, 0%, 30%)',
            label: 'Dim grey'
        },
        {
            color: 'hsl(0, 0%, 60%)',
            label: 'Grey'
        },
        {
            color: 'hsl(0, 0%, 90%)',
            label: 'Light grey'
        },
        {
            color: 'hsl(0, 0%, 100%)',
            label: 'White',
            hasBorder: true
        },
        {
            color: 'hsl(0, 75%, 60%)',
            label: 'Red'
        },
        {
            color: 'hsl(30, 75%, 60%)',
            label: 'Orange'
        },
        {
            color: 'hsl(60, 75%, 60%)',
            label: 'Yellow'
        },
        {
            color: 'hsl(90, 75%, 60%)',
            label: 'Light green'
        },
        {
            color: 'hsl(120, 75%, 60%)',
            label: 'Green'
        },
        ]
    },
    fontColor: {
        columns: 5,
        colors: [ {
            color: 'hsl(0, 0%, 0%)',
            label: 'Black'
        },
        {
            color: 'hsl(0, 0%, 30%)',
            label: 'Dim grey'
        },
        {
            color: 'hsl(0, 0%, 60%)',
            label: 'Grey'
        },
        {
            color: 'hsl(0, 0%, 90%)',
            label: 'Light grey'
        },
        {
            color: 'hsl(0, 0%, 100%)',
            label: 'White',
            hasBorder: true
        },
        {
            color: 'hsl(0, 75%, 60%)',
            label: 'Red'
        },
        {
            color: 'hsl(30, 75%, 60%)',
            label: 'Orange'
        },
        {
            color: 'hsl(60, 75%, 60%)',
            label: 'Yellow'
        },
        {
            color: 'hsl(90, 75%, 60%)',
            label: 'Light green'
        },
        {
            color: 'hsl(120, 75%, 60%)',
            label: 'Green'
        },
        ]
    },
    fontFamily: {
        options: [
            'default',
            'Arial, Helvetica, sans-serif',
            'Courier New, Courier, monospace',
            'Georgia, serif',
            'Lucida Sans Unicode, Lucida Grande, sans-serif',
            'Tahoma, Geneva, sans-serif',
            'Times New Roman, Times, serif',
            'Trebuchet MS, Helvetica, sans-serif',
            'Verdana, Geneva, sans-serif',
            'NotoSansTC,  "Segoe UI", Roboto, "Helvetica Neue", "PingFang SC", "Noto Sans","Noto Sans CJK SC"',
        ]
    },
    link: {
        decorators: {
            addTargetToLinks: {
                mode: 'manual',
                label: 'Open in a new tab',
                attributes: {
                    target: '_blank',
                    rel: 'noopener noreferrer'
                }
            },
            toggleDownloadable: {
                mode: 'manual',
                label: 'Downloadable',
                attributes: {
                    download: 'file'
                }
            },
            addTargetToExternalLinks: {
                mode: 'automatic',
                callback: url => /^(https?:)?\/\//.test( url ),
                attributes: {
                    class: 'a',
                }
            }
        },
	},
toolbar: {
    items: [
        'heading',
        '|',
        "indent",
        "outdent",
        'bulletedList',
        'numberedList',
        "|",
        'fontFamily',
        'fontSize',
        'fontColor',
        'fontbackgroundcolor',
        '|',
        'removeFormat',
        "bold",
        "italic",
        "underline",
        "strikethrough",
        // "code",
        "subscript",
        "superscript",
        "|",
        "link",
        "imageUpload",
        'mediaEmbed',
        "blockQuote",
        "insertTable",
        "undo",
        "redo"
    ]
},
image: {
    // You need to configure the image toolbar, too, so it uses the new style buttons.
    toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],

        styles: [
            // This option is equal to a situation where no style is applied.
            'full',

            // This represents an image aligned to the left.
            'alignLeft',

            // This represents an image aligned to the right.
            'alignRight'
        ]
},
table: {
    contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
    ]
},
heading: {
    options: [ {
        model: 'paragraph',
        title: 'Paragraph',
        class: 'ck-heading_paragraph'
    },
    {
        model: 'heading6',
        view: 'h6',
        title: 'Heading 6',
        class: 'ck-heading_heading6'
    },
    {
        model: 'heading5',
        view: 'h5',
        title: 'Heading 5',
        class: 'ck-heading_heading5'
    },
    {
        model: 'heading4',
        view: 'h4',
        title: 'Heading 4',
        class: 'ck-heading_heading4'
    },
    {
        model: 'heading3',
        view: 'h3',
        title: 'Heading 3',
        class: 'ck-heading_heading3'
    },
    {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        class: 'ck-heading_heading2'
    },
    {
        model: 'heading1',
        view: 'h1',
        title: 'Heading 1',
        class: 'ck-heading_heading1'
    },
    ]
},
// This value must be kept in sync with the language defined in webpack.config.js.
language: 'en'
};
// eslint-disable-next-line no-undef
window.ClassicEditor = ClassicEditor;
