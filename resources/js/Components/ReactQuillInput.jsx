import React, { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import Quill from "quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.core.css";
import { router, useForm, usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import ImageResize from "quill-image-resize-module-react";
import BlotFormatter from "quill-blot-formatter";
Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/blotFormatter", BlotFormatter);

export const ReactQuillInput = ({ theme, ...props }) => {
    const quillRef = useRef();

    const ImageUpload = (formData, editor) => {
        for (const value of formData.values()) {
            router.post(
                route("imageblog"),
                {
                    value,
                },
                {
                    onSuccess: (e) => {
                        let data = e.props.flash.message;
                        editor.insertEmbed(
                            editor.getSelection(),
                            "image",
                            data
                        );
                    },
                }
            );
        }
    };

    const imageHandler = async (e) => {
        const editor = quillRef.current.getEditor();

        // console.log(editor);
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            if (/^image\//.test(file.type)) {
                const formData = new FormData();
                formData.append("image", file);
                ImageUpload(formData, editor); // upload data into server or aws or cloudinary
            } else {
                ErrorToast("You could only upload images.");
            }
        };
    };

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ 'header': [1, 2,3,4,5,6, false] }],
                    ["bold", "italic", "underline", "strike", 'blockquote'],
                    [{ align: [] }],
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                    ["link", "image"],
                    ["clean"],
                ],
                handlers: {
                    image: imageHandler,
                },
            },
            imageResize: {
                parchment: Quill.import("parchment"),
                modules: ["Resize", "DisplaySize", "Toolbar"],
            },
        }),
        []
    );

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
    ];

    return (
        <>
            <ReactQuill
                ref={quillRef}
                theme={theme || "snow"}
                modules={modules}
                formats={formats}
                {...props}
            />
        </>
    );
};
