interface HeadProps {
    titleSpecs: Array<{ title: string }>
}
export default function HeadConfigurator({ titleSpecs }: HeadProps) {
    return (
        <thead>
            <tr>
                {titleSpecs.map(({ title }) => {
                    return <th key={title}>{title}</th>
                })}
            </tr>
        </thead>
    )
}
