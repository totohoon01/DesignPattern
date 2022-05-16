### Design Pattern

1. Singleton Pattern

- 1개만 존재하는 인스턴스를 공유해서 사용
- 전역 인스턴스
- 공통된 객체를 여러개 생성해서 사용할 필요가 있을때 유용하다.
- 싱글톤 인스턴스가 너무 많은 일을 하거나 데이터를 공유할 경우 다른 클래스의 인스턴스 간 결합도가 높아질 수 있다.

2. Obsever Pattern

- 어떤 객채의 상태가 변할때 그와 연관된 객체들에 알림을 보낸다.
- Observable은 대체로 subscribe, unsubscribe, notify로 구성
- Obsevable에서 구독중인 클래스들로 메시지 일괄 전파
- 여러가지를 동시에 바꿀때 유용하다.

3. Factory Pattern

- 인터페이스는 미리 결정
- 인스턴스를 서브 클래스에서 생성
