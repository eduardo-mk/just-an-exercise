interface HeadProps {
    titleSpecs: Array<{ title: string; include: boolean }>
}
export default function HeadConfigurator({ titleSpecs }: HeadProps) {
    return (
        <thead>
            <tr>
                {titleSpecs
                    .filter(({ include }) => include)
                    .map(({ title }) => {
                        return <th key={title}>{title}</th>
                    })}
            </tr>
        </thead>
    )
}
