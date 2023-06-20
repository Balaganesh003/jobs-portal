import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import Dropcursor from '@tiptap/extension-dropcursor';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import Link from '@tiptap/extension-link';

import {
  FaBold,
  FaItalic,
  FaListOl,
  FaListUl,
  FaUnderline,
} from 'react-icons/fa';

import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuRedo2,
  LuUndo2,
} from 'react-icons/lu';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-center justify-between p-[2px] mx-3 mt-3 rounded-lg bg-[#f4f4f4] font-graphik-regular">
      <div className="flex  items-center gap-1 md:gap-2 lg:gap-3  mb-0 mx-1">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive('bold')
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <FaBold className="w-3 h-3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive('italic')
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <FaItalic className="w-3 h-3" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={
            editor.isActive('underline')
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <FaUnderline className="w-3 h-3" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive('bulletList')
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <FaListUl className="w-3 h-3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive('orderedList')
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <FaListOl className="w-3 h-3" />
        </button>
        {/* h1 */}

        {/* h2 */}
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive('heading', { level: 1 })
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <LuHeading1 className="w-3 h-3" />
        </button>
        {/* h3 */}
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive('heading', { level: 2 })
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <LuHeading2 className="w-3 h-3" />
        </button>
        {/* undo */}
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive('heading', { level: 3 })
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <LuHeading3 className="w-3 h-3" />
        </button>
        {/* redo */}
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}>
          <LuUndo2 className="w-3 h-3 font-bold" />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}>
          <LuRedo2 className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

const TiptapEditor = ({ setDescription }) => {
  const editor = useEditor({
    extensions: [
      Placeholder.configure({
        placeholder: () => {
          return 'Description...';
        },
      }),
      TextStyle.configure({ types: [ListItem.name] }),
      Link.configure({ types: [ListItem.name] }),
      Underline.configure({ types: [ListItem.name] }),
      Dropcursor,
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    content: ``,
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
      setDescription(editor.getHTML());
    },
  });

  return (
    <div className="w-full bg-white border-[1px] rounded-lg border-black">
      <MenuBar editor={editor} className="menubar" />
      <EditorContent editor={editor} className="" />
    </div>
  );
};

export default TiptapEditor;
