## 브런치 룰

## Reference
- https://nvie.com/posts/a-successful-git-branching-model/
- https://guides.github.com/introduction/flow/

## 개요
- `main` `release` 에는 직접 푸시 하지 않는다.
- 기본적으로 git flow 형식의 브랜치 룰을 따른다.

### main
- Only PR
- 최종 릴리즈 코드를 같이 푸시

### develop
- 릴리즈 이전의 최종적으로 피쳐 브랜치의 합이 되는 브랜치
- 직접 푸시 하는 것은 지양하되 불가피할 경우 바로 푸시

### feature/`#<issue>`
- 피쳐 개발


# Commit convention

## Reference
- https://www.conventionalcommits.org/en/v1.0.0/
- https://doublesprogramming.tistory.com/256


## Type
- `feat` 새로운 기능 추가
- `fix` 버그 수정
- `docs` 문서 수정
- `style` 코드 포맷팅, 띄어쓰기, 들여쓰기
- `merge` merge 시 사용
