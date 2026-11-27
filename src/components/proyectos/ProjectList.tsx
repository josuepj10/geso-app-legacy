import ProjectCard, { type ProjectCardData } from "./ProjectCard"

interface ProjectListProps {
  cards: ProjectCardData[]
  /** Si es true, la primera tarjeta empieza con el texto a la izquierda. */
  startReversed?: boolean
}

// Lista de proyectos de un área: alterna la imagen a la izquierda y a la derecha.
export default function ProjectList({ cards, startReversed = false }: ProjectListProps) {
  return (
    <>
      {cards.map((card, index) => (
        <ProjectCard key={card.title} {...card} reverse={(index % 2 === 1) !== startReversed} />
      ))}
    </>
  )
}
