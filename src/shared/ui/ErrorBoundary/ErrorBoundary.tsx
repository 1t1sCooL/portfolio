"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            style={{
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "#fee",
              border: "1px solid #fcc",
              borderRadius: "0.5rem",
              margin: "1rem 0",
            }}
          >
            <h2 style={{ color: "#c33" }}>Что-то пошло не так</h2>
            <p style={{ color: "#666" }}>
              Произошла ошибка при загрузке этой части страницы.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "0.25rem",
                cursor: "pointer",
              }}
            >
              Попробовать снова
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
