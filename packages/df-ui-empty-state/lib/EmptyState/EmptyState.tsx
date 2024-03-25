import React from "react"
import styles from "./EmptyState.module.css"

interface EmptyStateProps {
  image?: string
  children?: React.ReactNode
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (props, ref) => (
    <div className={styles["root"]} ref={ref}>
      <div className={styles["wrapper"]}>
        <div className={styles["content"]}>
          {props.image && <img className={styles["image"]} src={props.image} />}
          {props.children}
        </div>
      </div>
    </div>
  )
)

export default EmptyState
