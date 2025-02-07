import { defineField, defineType } from 'sanity'

export const projects = defineType({
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Project Name",
            type: "string"
        }),
        defineField({
            name: "description",
            title: "Project Description",
            type: "text"
        }),
        defineField({
            name: "technologies",
            title: "Project technologies",
            type: "array",
            of: [{ type: 'string' }],
        }),
        defineField({
            name: "project_link",
            title: "Project Link",
            type: "url",
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        }),
        defineField({
            name: "isCompleted",
            title: "Is Completed",
            type: "boolean",
        }),
        defineField({
            name: "project_image",
            title: "Project Image",
            type: "image",
            options: {
                hotspot: true
            },

        }),

    ]
})